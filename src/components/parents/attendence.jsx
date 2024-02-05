import { Calendar } from "antd";

export default function Attendence() {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <>
      <div style={{ width: 290, border: "1px solid #d9d9d9", borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>

      <div className="Attendence-container">
        <div>
          <p> Total Number of Working Days 24.</p>
        </div>
        <div>
          <div> Total Absent 03 </div>
          <div>Total present 21 </div>
        </div>
      </div>
    </>
  );
}