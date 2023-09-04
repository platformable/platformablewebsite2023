// used the classic mailerlite api : https://developers-classic.mailerlite.com/reference/subscribers-in-a-group

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const groupId = process.env.NEXT_PUBLIC_GROUP_ID;
const waitingListGroupId = process.env.NEXT_PUBLIC_WAITING_LIST_GROUP_ID

export default async function subscribe(req, res) {
  // const { email } = req.body;

  const email='alexei@platformable.com'
  const name="Alexei"
  const lastname="Garban"
  

  try {
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${waitingListGroupId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": apiKey,
        },
        body: JSON.stringify({ email, name, lastname }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ message: `subscription failed` });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// export async function getSubscribers(req, res) {
//   try {
//     const response = await fetch(
//       `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "X-MailerLite-ApiKey": apiKey,
//         },
//       }
//     );

//     if (response.ok) {
//       return res.status(200).json(await response.json());
//     } else {
//       return res.status(400).json({ message: `Couldn't access subscribers` });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }
