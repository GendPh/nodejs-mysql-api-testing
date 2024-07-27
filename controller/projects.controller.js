const pool = require("../database/index")
const projectsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from projects")
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "Failed to get projects " + error
      })
    }
  },
}
module.exports = projectsController