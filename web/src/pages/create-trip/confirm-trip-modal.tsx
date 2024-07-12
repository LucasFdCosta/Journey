import { Mail, User, X } from "lucide-react";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirm trip creation</h2>
            <button onClick={closeConfirmTripModal}><X className="size-5 text-zinc-400" /></button>
          </div>
          <p className="text-sm text-zinc-400">
            To finish the creation of the trip to <span className="text-zinc-100 font-semibold">São Paulo, Brasil</span> from <span className="text-zinc-100 font-semibold">August 16th 2024 to August 17th 2024</span>, fill your info below
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Full name"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button type="submit" className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400">
            Confirm trip creation
          </button>
        </form>
      </div>
    </div>
  )
}