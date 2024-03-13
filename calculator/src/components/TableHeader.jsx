import { TABLE_HEADER } from "../assets/TABLE_HEADER"

export default function TableHeader() {
    return (
        <thead>
            <tr>
                {TABLE_HEADER.map((header, index) => (
                        <th key={index}>{header}</th>
                ))}
            </tr>            
        </thead>
    )
}