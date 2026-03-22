import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const titleStyle: React.CSSProperties = {
  alignItems: 'center',
  fontSize: 28,
  fontWeight: 'bold',
  marginTop: 32,
  marginBottom: 32,
}

const buttonStyle: React.CSSProperties = {
  borderRadius: 9999,
  paddingLeft: 48,
  paddingRight: 48,
  paddingTop: 24,
  paddingBottom: 24,
  fontSize: 18,
}

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Label style={titleStyle}>旅の計画をシェアしよう。</Label>
        <Button
          size="lg"
          className="cursor-pointer hover:opacity-90 hover:scale-105 transition-all"
          style={buttonStyle}
          nativeButton={false}
          render={<Link href="/plan/new" />}>
          はじめる
        </Button>
      </div>
    </div>

  );
}
