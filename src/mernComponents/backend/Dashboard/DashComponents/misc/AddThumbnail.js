import React from 'react'
import Dropzone from 'react-dropzone';
import styles from './AddThumbnail.module.css';
import {PlusOne} from '@material-ui/icons';
function AddThumbnail({onDrop}) {
 
    return (
        <div>
            <Dropzone onDrop={onDrop}>
  {({getRootProps, getInputProps}) => (
    <section className={styles.AddThumbnail}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={styles.PlusOne}><PlusOne/></p>
        <span>AddThumbnail</span>
      </div>
    </section>
  )}
</Dropzone>
        </div>
    )
}

export default AddThumbnail;
