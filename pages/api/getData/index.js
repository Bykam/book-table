const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret = "fnAE7u4u80AA10VH9jZD1-ZVJk66c0O1MRtlIbHb";
const q = faunadb.query;
const client = new faunadb.Client({
  secret,
  domain: "db.fauna.com",
});
module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("book"))),
        q.Lambda("doc", q.Get(q.Var("doc")))
      )
    );

    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};