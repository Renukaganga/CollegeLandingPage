import { NextResponse } from "next/server";
import {connectMongoDB} from "@/lib/mongodb"
import User from "@/models/user"

export async function POST(req) {
    try {

        const { name,
            email,
            phonenumber,
            address,course } = await req.json();
        console.log("Name : ", name)
        await connectMongoDB();
        await User.create({
            name,email,phonenumber,address,course
        })
        return NextResponse.json({ message: "user registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error Occurred" }, { status: 500 })
    }
}