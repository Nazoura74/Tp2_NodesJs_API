function send(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(data ? JSON.stringify(data) : null);
}

module.exports = send;
