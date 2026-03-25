"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react"

// カード1枚分のデータの型
type ScheduleItem = {
  date: string;
  time: string;
  title: string;
  detail: string;
}

export default function PlanCreatePage() {

  // カードの配列を状態として持つ。
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);

  const addSchedule = () => {
    setSchedules([...schedules, { date: "", time: "", title: "", detail: "" }])
  };

  return (
    <div className="max-w-3xl mx-auto py-20">
      {/* タイトル */}
      <div className="mb-6">
        <Label>日付</Label>
        <Input className="p-4" placeholder="例：沖縄3泊4日の旅" />
      </div>
      {/* メモ */}
      <div className="mb-6">
        <Label>メモ</Label>
        <Textarea className="p-4" placeholder="持ち物、注意事項など" />
      </div>
      {schedules.map((item, index) => (
        <div key={index} className="max-w-3xl mx-auto py-20">
          <div className="mb-6">
            <Label>日付</Label>
            <Input type="date" className="p-4" />
          </div>
          <div className="mb-6">
            <Label>時間</Label>
            <Input type="time" className="p-4" />
          </div>
          <div className="mb-6">
            <Label>タイトル</Label>
            <Input />
          </div>
          <div className="mb-6">
            <Label>詳細</Label>
            <Textarea />
          </div>
        </div>
      ))}
      <Button type="button" onClick={addSchedule}>＋ 追加</Button>
      <Button>作成</Button>
    </div>
  );
}