const pool = require("../database/index")
const { getById } = require("./posts.controller")
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
  getById: async (req, res) => {
    try {
      const { id } = req.params
      const [rows, fields] = await pool.query("select title from projects where id = ?", [id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "Failed to get project " + error
      })
    }
  },
}
module.exports = projectsController