import TableRow from "./container/TableRow";

function App() {
  const rows = [{ data: ["2017년 5월 28일"], headerName: "창단일", backgroundColor: "black", color: "white" }];

  return (
    <tbody>
      <TableRow data={["2017년 5월 28일"]} headerName={"창단일"} backgroundColor={"black"} color={"white"} />
      <TableRow data={["머한민국"]} headerName={"소재지"} backgroundColor={"black"} color={"white"} />
      <TableRow data={["㈜에이디이스포츠"]} headerName={"법인명"} backgroundColor={"black"} color={"white"} />
      <TableRow data={["어비스컴퍼니"]} headerName={"모기업"} backgroundColor={"black"} color={"white"} />
      <TableRow data={["리그 오브 레전드", "배틀그라운드", "발로란트", "레인보우 식스 시즈"]} headerName={"종목"} backgroundColor={"black"} color={"white"} />
    </tbody>
  );
}

export default App;
