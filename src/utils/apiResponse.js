const ok = (res, data) => res.status(200).json({ data });
const created = (res, data) => res.status(201).json({ data });

module.exports = { ok, created };
