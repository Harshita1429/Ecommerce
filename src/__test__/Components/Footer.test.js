import React from "react";
import  Footer from "../../customer/Components/Footer/Footer.js";
import { render } from '@testing-library/react';

describe("Footer component", () => {
    test('renders name in profile', () => {
        render(<Footer />)
    });
})