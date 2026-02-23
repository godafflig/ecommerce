import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function Produit() {
    return (
        <div>
            <Input value="" onChange={(val) => console.log(val)} placeholder="Nom du produit" />
            <Button onClick={() => console.log("Produit ajouté")}>Ajouter le produit</Button>
        </div>
    );
}