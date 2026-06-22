import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("ORDER BODY:", body);

    const { data, error } = await supabaseAdmin
      .from("orders")
      .insert({
        order_number: `BC-${Date.now().toString().slice(-6)}`,
        customer_name: body.customer_name,
        phone: body.phone,
        email: body.email || null,
        address: body.address,
        items: body.items,
        total_amount: body.total_amount,
        payment_method: "Cash on Delivery",
        order_status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.log("SUPABASE ORDER ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log("API ORDER ERROR:", error);
    return NextResponse.json(
      { error: "Order API failed" },
      { status: 500 }
    );
  }
}