import MKList from "./components/mk/MKList";
import { IKnesetMember } from "./types";

const dummy_mks: IKnesetMember[] = [
  {
    mpId: 1,
    mpName: "בנימין נתניהו",
    partyName: "הליכוד",
    personalInfo: "ראש ממשלת ישראל",
  },
  {
    mpId: 2,
    mpName: "בנימין גנץ",
    partyName: "המחנה הממלכתי",
    personalInfo: "יושב ראש סיעת המחנה הממלכתי ושר הביטחון לשעבר",
  },
  {
    mpId: 3,
    mpName: "יאיר לפיד",
    partyName: "יש עתיד",
    personalInfo: "יושב ראש האופוזיציה וראש הממשלה לשעבר",
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl">Hello</h1>
      <MKList list={dummy_mks} />
    </div>
  );
}

export default App;
