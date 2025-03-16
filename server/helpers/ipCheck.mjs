import env from "dotenv";
env.config();

const allowedIPs = (process.env.ALLOWED_IPS || "").split(",").map(ip => ip.trim());

function ipCheck(req, res, next) {
  let requestIP = req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.connection.remoteAddress;

  if (requestIP.startsWith("::ffff:")) {
    requestIP = requestIP.substring(7);
  }
  
  if (allowedIPs.includes(requestIP)) {
    next();
  } else {
    res.status(403).json({ msg: "アクセス権限がありません" });
  }
}

export default ipCheck;
