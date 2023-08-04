export default function BlogPreviewCard({}) {
    return (
        <div className="rounded-md grid grid-[3fr_1fr_3fr_1fr] shadow">
                <div className="flex justify-center items-center py-2"></div>
                <div className="flex items-center gap-x-2 py-2">
                    <div>
                        13 <br />
                        Aug
                    </div>
                    <span>Open Banking/Open Finance</span>
                </div>
                <div className="py-2 px-3">
                    <h5>New report release: Q3 2022 Open Banking/Open Finance Bussiness models and use cases</h5>
                    <small>Written by Spencer Perkins</small>
                </div>
                <div className="px-3 py-2 flex items-center justify-between"></div>
        </div>
    );
}