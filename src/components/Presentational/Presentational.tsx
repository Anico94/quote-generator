import React, { FC } from "react";
import "./Presentational.css";

interface PresentationalProps {}

const Presentational: FC<PresentationalProps> = () => (
    <div className="Presentational" data-testid="Presentational">
        Presentational Component
    </div>
);

export default Presentational;
