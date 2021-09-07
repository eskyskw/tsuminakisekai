import React, { useState } from "react";

const title = '積みなき世界'

export default function TheTitol() {
  
    return (
        <header>
            <table><tbody><tr>
            <td>
                <h1> {title} </h1>
            </td>
            <td>
                <h2> 概要 </h2>
            </td>
            <td>
                <h2> 設定 </h2>
            </td>
            <td>
                <h2> 不具合報告 </h2>
            </td>
            </tr></tbody></table>
        </header>
    );
}