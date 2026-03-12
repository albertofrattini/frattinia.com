import { resolveFile, getAllFilePaths, getBreadcrumbs } from "../../data/filesystem";
import EditorContent from "../../components/ide/EditorContent";

export function generateStaticParams() {
    return getAllFilePaths().map((segments) => ({
        slug: segments,
    }));
}

export default async function FilePage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const file = resolveFile(slug);

    if (!file) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-ide-muted p-8">
                <p className="text-[15px] font-semibold text-ide-text mb-2">
                    File not found
                </p>
                <p className="text-[13px]">
                    {slug.join("/")} does not exist in this workspace.
                </p>
            </div>
        );
    }

    return <EditorContent file={file} />;
}
