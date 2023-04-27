import { useSnapshot } from "valtio"
import state from "../state"
import { closeModalWithListener } from "../utilities"
import { useOutsideClick } from "../hooks"

const Controls = () => {
    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)
    
    return (
        <div ref={modalRef} className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h1 className="text-4xl text-center mt-6 font-bold">Controls</h1>
            <section className="flex w-full h-full items-center">
                <div className="flex flex-col items-end w-1/2 p-3 gap-6">
                    <span className="text-xl font-bold">Left Arrow</span>
                    <span className="text-xl font-bold">Right Arrow</span>
                    <span className="text-xl font-bold">Up Arrow</span>
                    <span className="text-xl font-bold">Down Arrow</span>
                    <span className="text-xl font-bold">Space Bar</span>
                    <span className="text-xl font-bold">Esc</span>
                </div>
                <div className="flex flex-col items-start w-1/2 p-3 gap-6">
                    <span className="text-xl">Move Left</span>
                    <span className="text-xl">Move Right</span>
                    <span className="text-xl">Rotate</span>
                    <span className="text-xl">Soft Drop</span>
                    <span className="text-xl">Hard Drop</span>
                    <span className="text-xl">Pause</span>
                </div>
            </section>
            <button className="text-2xl w-24 h-12 rounded-md border-2 border-black primary-button" onClick={closeModalWithListener}>Close</button>
        </div>
    )
}

export default Controls