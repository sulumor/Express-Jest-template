export default class CoreController {
  static datamapper;

  static async getAll(_, res) {
    const rows = await this.datamapper.findAll();
    return res.status(200).json(rows);
  }

  static async getByPk({ params }, res, next) {
    const { id } = params;
    const row = await this.datamapper.findByPk(id);
    if (!row) return next();
    return res.status(200).json(row);
  }

  static async create({ body }, res) {
    const row = await this.datamapper.insert(body);
    return res.status(200).json(row);
  }

  static async update({ params, body }, res, next) {
    const { id } = params;
    const row = await this.datamapper.update(id, body);
    if (!row) return next();
    return res.status(200).json(row);
  }

  static async delete({ params }, res, next) {
    const { id } = params;
    const deleted = await this.datamapper.delete(id);
    if (!deleted) return next();
    return res.status(204).end();
  }
}
