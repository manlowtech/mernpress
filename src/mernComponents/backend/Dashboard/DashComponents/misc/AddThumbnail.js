import React from 'react'
import Dropzone from 'react-dropzone';
import styles from './AddThumbnail.module.css';
import {PlusOne} from '@material-ui/icons';
function AddThumbnail({onDrop}) {
 
    return (
        <div>
          <form>
            <Dropzone onDrop={onDrop} multiple={false}>
  {({getRootProps, getInputProps}) => (
    <section className={styles.AddThumbnail}>
      <div {...getRootProps()}>
        <input name="post_thumbnail" {...getInputProps()} />
        <p className={styles.PlusOne}><PlusOne/></p>
        <span>AddThumbnail</span>
      </div>
    </section>
  )}
</Dropzone>
</form>
        </div>
    )
}

export default AddThumbnail;
