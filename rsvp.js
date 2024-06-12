const partyData = {
    "Mr. and Mrs. Edward Newman JR.": ["Edward Newman", "Rebecca Newman"],
    "Mr. and Mrs. Brooke Newman JR.": ["Edward Newman", "Robret Newman", "Jonhhy"]
};

document.getElementById('nameSearch').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const dropdown = document.getElementById('nameDropdown');
    dropdown.innerHTML = '';
    if (query) {
        const results = Object.keys(partyData).filter(name => name.toLowerCase().includes(query));
        if (results.length > 0) {
            dropdown.style.display = 'block';
            results.forEach(name => {
                const div = document.createElement('div');
                div.textContent = name;
                div.addEventListener('click', function () {
                    document.getElementById('nameSearch').value = name;
                    populatePartyMembers(name);
                    dropdown.style.display = 'none';
                });
                dropdown.appendChild(div);
            }); t
        } else {
            dropdown.style.display = 'none';
        }
    } else {
        dropdown.style.display = 'none';
    }
});

function populatePartyMembers(name) {
    const partyMembers = document.getElementById('partyMembers');
    partyMembers.innerHTML = '';
    if (partyData[name]) {
        partyData[name].forEach(member => {
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>${member}:</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="rsvp_${member}" value="Attending" required> Joyfully Accept
                    </label>
                    <label>
                        <input type="radio" name="rsvp_${member}" value="Not Attending" required> Regretfully Decline
                    </label>
                </div>
            `;
            partyMembers.appendChild(div);
        });
    }
}t