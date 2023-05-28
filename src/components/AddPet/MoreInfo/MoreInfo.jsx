import React from "react";
import { useRef } from 'react';
import {ReactComponent as PlusFile} from '../../../icons/plus.svg';
import {Input, Title} from "../AddPet.styled";
import { Field } from "formik";
import { PlusFileButton } from "./MoreInfo.styled";
export const MoreInfo = () => {
    const fileInputRef = useRef(null);
    const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                <Title style={{ display: 'inline', fontSize: '20px', marginBottom: '0px', width: '114px' }}>Load the pet's image:</Title>
                <div className="file-input-container">
                    <PlusFileButton type="button" onClick={handleFileButtonClick}><PlusFile style={{width: '48px', height: '48px'}}/></PlusFileButton>
                    <Field
                        name="file"
                        type="file"
                        innerRef={fileInputRef}
                        style={{ display: 'none' }}
                        // onChange={(event) => {
                        // const selectedFile = event.currentTarget.files[0];
                        // // Опрацювання обраного файлу
                        // }}
                    />
                </div>
            </div>
            <Title style={{ display: 'inline', fontSize: '20px', marginBottom: '0px', width: '114px' }}>Comment</Title>
            <Input
                type='text'
                name='comment'
                placeholder="Type a comment"
                autoComplete="off"
            >
            </Input>
        </>
    )
}