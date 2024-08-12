import Sidebar from "../customWidget/Sidebar";
import '../css/DocumentEditorPage.css'

const DocumentEditorPage = () => {
  return (
    <div className="documentEditorContainer">
      <Sidebar />
      <section className="documentContentContainer">
        <textarea name="documentTextArea" id="documentTextArea" placeholder="write here"></textarea>
      </section>
    </div>
  );
};

export default DocumentEditorPage;