import PageLayout from "@/components/PageLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const members = [
  { name: "Jacob Dahl Rendtorff", phone: "2961 5370" },
  { name: "Benedicta Pécseli", phone: "4157 0781" },
  { name: "Anders Bordum", phone: "3024 3783" },
  { name: "Emil Hageman Christensen", phone: "2713 7992" },
  { name: "Niels Mattsson Johansen", phone: "2323 5701" },
  { name: "Sandra Frost", phone: "3117 5389" },
  { name: "Adam Diderichsen", phone: null },
];

const Bestyrelse = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Filosofisk Forums Bestyrelse</h2>

      <div className="max-w-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Navn</TableHead>
              <TableHead>Telefon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.name}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell className="text-muted-foreground">{m.phone ?? ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </article>
  </PageLayout>
);

export default Bestyrelse;
