import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import './ProjectDialog.sass'

export default function ProjectDialog({ project, dialogHandler, open }) {


   return (
      <Dialog
         open={open}
         onClose={dialogHandler}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <div className='dialog-project'
            style={{
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundImage: `url(${project.image})`
            }}>
            <div className='dialog-content'>
            </div>
         </div>
         <div className='dialog-infos'>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="btns">
               <a className='btn' href="#">Ver projeto</a>
            </div>
         </div>
      </Dialog>
   );
}
