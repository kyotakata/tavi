"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react"

// カード1枚分のデータの型
type ScheduleItem = {
  date: string;
  time: string;
  title: string;
  detail: string;
}

export default function PlanCreatePage() {

  // 最後のカードのDOM要素を参照する
  const lastCardRef = useRef<HTMLDivElement>(null);
  // カードの配列を状態として持つ。
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);

  const addSchedule = () => {
    setSchedules([...schedules, { date: "", time: "", title: "", detail: "" }])
  };

  // schedulesが変わるたびに最後のカードへスクロール
  useEffect(() => {
    lastCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [schedules]);

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
      {/* スケジュールカード */}
      {schedules.map((item, index) => (
        <div
          key={index}
          ref={index === schedules.length - 1 ? lastCardRef : null}
          className="border rounded-xl p-6 mb-4 shadow-sm">
          <div className="flex">
            <div className="m-4">
              <Label>日付</Label>
              <Input type="date" className="p-4" />
            </div>
            <div className="m-4">
              <Label>時間</Label>
              <Input type="time" className="p-4" />
            </div>
          </div>
          <div className="m-4">
            <Label>タイトル</Label>
            <Input />
          </div>
          <div className="m-4">
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