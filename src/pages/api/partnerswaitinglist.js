const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const waitingListGroupId = process.env.NEXT_PUBLIC_PARTNERS_WAITING_LIST_GROUP_ID;

export default async function partnersWaitingList(req, res) {
  const { name, last_name, email, country } = req.body;

  try {
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${waitingListGroupId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": apiKey,
        },
        body: JSON.stringify({ name, fields: { last_name, country }, email }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ message: `subscription failed` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
