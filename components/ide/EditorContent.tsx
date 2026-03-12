import { FileNode } from "../../data/filesystem";
import MarkdownRenderer from "./MarkdownRenderer";

export default function EditorContent({ file }: { file: FileNode }) {
    return (
        <div className="flex-1 overflow-auto">
            <MarkdownRenderer content={file.content} />
        </div>
    );
}
