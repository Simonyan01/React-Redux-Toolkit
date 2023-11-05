import { Fade, Tooltip } from "@mui/material";

const TodoForm = ({ value, editId, onAdd, onUpdate, onChange, onClearValue, onClearEditId }) => {
  return (
    <section className="rounded-xl py-10 px-3 bg-[#6996e9] text-center">
      <span className="relative bottom-4 text-white tracking-wider text-5xl select-none font-medium">
        To do List
      </span>
      <form
        className="grid grid-cols-[1fr,auto]"
        onSubmit={(e) => {
          e.preventDefault()
          onClearValue("")
          onClearEditId(null)
        }}
      >
        <input
          className="w-full text-base lg:text-lg tracking-widest rounded-md bg-white outline-none placeholder:tracking-widest px-4"
          type="text"
          placeholder="Title..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
          title="Please write the text"
        >
          <span>
            <button
              className="disabled:text-gray-400 disabled:cursor-not-allowed tracking-widest font-medium p-1 cursor-pointer bg-white rounded-md duration-300 hover:bg-gray-300 w-120 ml-3 outline-none"
              disabled={!value.trim()}
              onClick={() => {
                if (!editId && value.trim()) {
                  onAdd(value)
                } else if (value.trim()) {
                  onUpdate(editId, value)
                }
              }}
            >
              {!editId ? "Add" : "Edit"}
            </button>
          </span>
        </Tooltip>
      </form>
    </section>
  );
}

export default TodoForm

