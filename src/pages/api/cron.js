export default function handler(req, res) {
  console.log('api/cron.js')
  res.status(200).json({ name: 'John Doe' })
}
