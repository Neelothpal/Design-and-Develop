import ProfileCardLight from "./components/ProfileCardLight"
import ProfileCardDark from "./components/ProfileCardDark"

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center gap-20 items-center">
      <ProfileCardLight />
      <ProfileCardDark />
    </div>
  )
}