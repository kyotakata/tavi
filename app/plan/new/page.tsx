import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PlanCreatePage() {
  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-xl font-bold mb-10">プラン作成</h1>
      <form>
        {/* タイトル */}
        <div className="mb-6">
          <Label>タイトル</Label>
          <Input className="p-4" placeholder="例：沖縄3泊4日の旅" />
        </div>
        {/* 旅行先 */}
        <div className="mb-6">
          <Label>旅行先</Label>
          <Input className="p-4" />
        </div>
        {/* 日程 */}
        <div className="mb-6">
          <Label>日程</Label>
          <div className="flex gap-4 items-center">
            <Input type="date" className="p-4" />
            <span>～</span>
            <Input type="date" className="p-4" />
          </div>
        </div>
        {/* メモ */}
        <div className="mb-6">
          <Label>メモ</Label>
          <Textarea className="p-4" placeholder="持ち物、注意事項など" />
        </div>
        <Button>作成</Button>
      </form>
    </div>
  );
}