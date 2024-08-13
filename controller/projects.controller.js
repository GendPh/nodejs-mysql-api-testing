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
  getPreviousAndNextName:async(req,res)=>{
    const id = parseInt(req.params.id, 10); // Get the ID from the request parameters
  
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
  
    try {
      // Query to get the previous and next IDs around the given ID
      const query = `
        SELECT id, name
        FROM projects
        WHERE id = (
            -- Previous ID
            CASE 
                WHEN ? = (SELECT MIN(id) FROM projects) THEN (SELECT MAX(id) FROM projects)  -- If current ID is the first, previous is the last
                ELSE (SELECT MAX(id) FROM projects WHERE id < ?)
            END
        )
        OR id = (
            -- Next ID
            CASE 
                WHEN ? = (SELECT MAX(id) FROM projects) THEN (SELECT MIN(id) FROM projects)  -- If current ID is the last, next is the first
                ELSE (SELECT MIN(id) FROM projects WHERE id > ?)
            END
        );
      `;
      
      const [rows] = await pool.promise().query(query, [id, id, id, id]);
  
      res.json(rows);
    } catch (error) {
      console.error('Error fetching previous and next names:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}
module.exports = projectsController