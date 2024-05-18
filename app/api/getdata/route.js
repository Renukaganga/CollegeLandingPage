// pages/api/users.js
// app/api/getdata/route.js
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function GET(req, res) {
  await connectMongoDB();

  try {
    const users = await User.find({});
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ message: 'Error fetching users', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
