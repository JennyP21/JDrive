import Suggestions from "../../../common/Suggestions/Suggestions";
import "./shared.css"

const Shared = () => {
    const suggestedFiles = [
        {
          fileName: "Final presentation  2023",
          fileType: "pdf",
          activity: "You modified this file yesterday",
        },
        {
          fileName: "Bills",
          fileType: "pdf",
          activity: "You created this file this morning",
        },
        {
          fileName: "Resume",
          fileType: "document",
          activity: "You modified this file Last Week",
        },
      ];
  return (
    <div className="shared">
        <Suggestions suggestedFiles={suggestedFiles} />
    </div>
  )
}

export default Shared