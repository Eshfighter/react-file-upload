import React, { Component } from 'react';
import { UploadComponentWrapper, DocumentUploadTitle, ProductWrapper } from './styled/DocumentUploadPage';
import DocumentChecklist from '../DocumentChecklist/DocumentChecklistContainer';
import ProductTile from '../ProductTile/ProductTile';
import SubmitButton from '../Footer/SubmitButtonContainer';
import creditCard from '../../assets/products/standard-chartered-worldmiles-world-mastercard.jpg';

class DocumentUploadPage extends Component {

    render() {
        return (
            <div>
            <UploadComponentWrapper>
                <DocumentUploadTitle>Document Upload</DocumentUploadTitle>
                <ProductWrapper>
                    <ProductTile imgSrc={creditCard} productName="Kendrick's Card" />
                    <DocumentChecklist />
                </ProductWrapper>
            </UploadComponentWrapper>
            <SubmitButton/>
            </div>
        );
    }
}

export default DocumentUploadPage;
