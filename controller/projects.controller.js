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
  getByName: async (req, res) => {
    try {
      const { name } = req.params
      const [rows, fields] = await pool.query("select * from projects where title = ?", [name])
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
  getPreviousAndNextName: async (req, res) => {
    try {
      const { id } = req.params
      const [rows, fields] = await pool.query(`WITH Ids AS (
    SELECT
        CASE
            WHEN ? = (SELECT MIN(id) FROM projects) THEN (SELECT MAX(id) FROM projects)
            ELSE (SELECT MAX(id) FROM projects WHERE id < ?)
        END AS prev_id,
        CASE
            WHEN ? = (SELECT MAX(id) FROM projects) THEN (SELECT MIN(id) FROM projects)
            ELSE (SELECT MIN(id) FROM projects WHERE id > ?)
        END AS next_id
),
OrderedResults AS (
    SELECT id
    FROM projects
    WHERE id IN (
        SELECT prev_id FROM Ids
        UNION
        SELECT next_id FROM Ids
    )
)
SELECT p.title
FROM projects p
JOIN OrderedResults o ON p.id = o.id
ORDER BY
    CASE
        WHEN ? = (SELECT MIN(id) FROM projects) THEN p.id
        WHEN ? = (SELECT MAX(id) FROM projects) THEN p.id
        ELSE NULL
    END DESC;
`, [id, id, id, id, id, id])
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