const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        source:
            document.getElementById("source").value,

        status:
            document.getElementById("status").value,

        notes:
            document.getElementById("notes").value

    };

    await fetch("/leads", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    loadLeads();

});

async function loadLeads() {

    const response =
        await fetch("/leads");

    const leads =
        await response.json();

    const list =
        document.getElementById("leadList");

    list.innerHTML = "";

    leads.forEach((lead) => {

        list.innerHTML += `
<li>
${lead.name}
(${lead.status})

<button
onclick="deleteLead('${lead._id}')">
Delete
</button>

</li>
`;

    });

}

async function deleteLead(id) {

    await fetch(`/leads/${id}`, {
        method: "DELETE"
    });

    loadLeads();

}

loadLeads();