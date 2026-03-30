import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; 

export async function POST(req: Request) {
  try {
    const { goal } = await req.json();

    // 1. MOCK THE AI (Bypass the 404/429 errors)
    const mockTasks = [
      { "title": `Research ${goal} components`, "priority": "high", "has_sparkle": false },
      { "title": `Purchase necessary tools`, "priority": "medium", "has_sparkle": false },
      { "title": `Execute the core build (Expert)`, "priority": "high", "has_sparkle": true },
      { "title": `Fine-tune and calibrate`, "priority": "low", "has_sparkle": false },
      { "title": `Final testing and cleanup`, "priority": "medium", "has_sparkle": false }
    ];

    // 2. TEST THE DATABASE (The real goal of Phase 2)
    const { data, error } = await supabase
      .from('tasks')
      .insert(mockTasks)
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Mock AI data saved to Supabase", data });

  } catch (err: any) {
    console.error("Pipeline Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}