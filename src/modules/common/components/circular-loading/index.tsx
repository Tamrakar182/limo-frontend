import Spinner from "@modules/common/icons/spinner"

export default function CircularLoading() {
    return (
        <div className="absolute min-h-screen min-w-screen z-[100]">
            <div className="fixed inset-0 bg-white flex text-[#3d715d] items-center justify-center">
                <Spinner size={54} color="#3d715d" />
            </div>
        </div>
    )
}

