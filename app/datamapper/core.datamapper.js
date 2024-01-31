import client from "../helpers/pg.client.js";

export default class CoreDatamapper {
  static tableName;

  static async findAll(params) {
    let filter = "";
    const values = [];

    if (params?.where) {
      const filters = [];
      let indexPlaceholder = 1;

      Object.entries(params.where).forEach(([param, value]) => {
        if (param === "or") {
          const filtersOr = [];
          Object.entries(value).forEach(([key, val]) => {
            filtersOr.push(`"${key}" = $${indexPlaceholder}`);
            values.push(val);
            indexPlaceholder += 1;
          });
          filters.push(`(${filtersOr.join(" OR ")})`);
        } else {
          filters.push(`"${param}" = $${indexPlaceholder}`);
          values.push(value);
          indexPlaceholder += 1;
        }
      });
      filter = `WHERE ${filters.join(" AND ")}`;
    }
    const result = await client.query(`SELECT * FROM "${this.tableName}" ${filter}`, [values]);
    return result.rows;
  }

  static async findByPk(id) {
    const result = await client.query(`SELECT * FROM "${this.tableName}" WHERE id=$1`, [id]);
    return result.rows[0];
  }

  static async insert(data) {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const placeholders = fields.map((_, index) => `$${index + 1}`);
    const result = await client.query(`
      INSERT INTO "${this.tableName}"
        (${fields}) VALUES (${placeholders})
        RETURNING *
    `, values);
    return result.rows[0];
  }

  static async update(id, data) {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const placeholderFields = fields.map((field, index) => `"${field}" = $${index + 1}`);
    const result = await client.query(`
      UPDATE "${this.tableName}"
      SET ${placeholderFields},
      // "update_at"= now()
      WHERE id = $${fields.lenght + 1}
      RETURNING *
    `, [...values, id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await client.query(`DELETE FROM "${this.tableName}" WHERE "id" = $1`, [id]);
    return !!result.rowCount;
  }
}
