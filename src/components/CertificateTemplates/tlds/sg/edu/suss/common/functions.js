// Rendering the # section
export function displayHexSectionMod(data) {
    for (const [index, value] of data.entries()) {
        <Element key={index} />;
        if (value.result === "#") {
            return (
                <tr>
                    <td colSpan="7"># Exempted from course</td>
                </tr>
            );
        }
    }
}

// Rendering the * section
export function displayStarSectionMod(data) {
    for (const [index, value] of data.entries()) {
        <Element key={index} />;
        if (value.creditUnits === "*") {
            return (
                <tr>
                    <td colSpan="7">
                        * Additional course taken, not included in gradutation
                        requirements.
            </td>
                </tr>
            );
        }
    }
}