import React, { useState } from "react";

export default function TheTitol({priceSum = 0, timeSum = 0}) {
    return(
        <table><tbody><tr>
            <td>
                <h2> あなたの<b>積み</b>は…… </h2>
            </td>
            <td>
                <h2> {priceSum} 円 </h2>
            </td></tr><tr>
            <td>
                <h2> <b>積み</b>期間の合計は…… </h2>
            </td>
            <td>
                <h2> {timeSum} 日 </h2>
            </td>
        </tr></tbody></table>
    );
}