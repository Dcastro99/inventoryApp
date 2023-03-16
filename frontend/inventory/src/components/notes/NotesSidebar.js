import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NotesSidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h2>Add notes</h2>
        <Button onClick={onAddNote} sx={{
          color: 'black', backgroundColor: 'white', '&:hover': {
            backgroundColor: 'white',
            // color: 'Tomato',
            // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          }
        }}><AddIcon /></Button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <Box sx={{ borderRadius: 2, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} >
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <Button onClick={(e) => onDeleteNote(id)}>Delete</Button>
              </div>
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default NotesSidebar;
