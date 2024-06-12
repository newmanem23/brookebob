const partyData = {
    'Alana Ounan': ['Alana Ounan'],
    'Dr Taylor Maney & Dr Zachary Oliff': ['Taylor Maney ', 'Zachary Oliff'],
    'Dr Thomas Kelly & Ms Barbara Kovelesky': ['Thomas Kelly ',
        'Barbara Kovelesky'],
    'Eric Winegardner & Ryan McKenna': ['Eric Winegardner ', ' Ryan McKenna'],
    'Isaac Levine': ['Isaac Levine'],
    'Jessie Kimsey': ['Jessie Kimsey'],
    'Kate Tom': ['Kate Tom'],
    'Madeline Tate & Danny Lubo': ['Madeline Tate ', ' Danny Lubo'],
    'Michael Gilfilan & Emily McCardle': ['Michael Gilfilan ',
        ' Emily McCardle'],
    'Mr & Mrs Adam Pilkerton': ['Erin Pilkerton', 'Adam Pilkerton'],
    'Mr & Mrs Bill Riggins': ['Karen Riggins', 'Bill Riggins'],
    'Mr & Mrs Brendan Michael': ['Haley Michael', 'Brendan Michael'],
    'Mr & Mrs Brian Meeker': ['Samantha Meeker', 'Brian Meeker'],
    'Mr & Mrs Brian Tompkins': ['Tamra Tompkins', 'Brian Tompkins'],
    'Mr & Mrs Chandler Vanderbeek': ['Marissa Vanderbeek',
        'Chandler Vanderbeek'],
    'Mr & Mrs Chris Newman': ['Sue Newman', 'Chris Newman'],
    'Mr & Mrs Christopher Heller': ['Carol Heller', 'Christopher Heller'],
    'Mr & Mrs Connor Godbout': ['Joan Godbout', 'Connor Godbout'],
    'Mr & Mrs Connor McGeough': ['Connor McGeough', 'Kaitlyn McGeough'],
    'Mr & Mrs Dan Yonker': ['Sharon Yonker', 'Dan Yonker'],
    'Mr & Mrs David Hall': ['Sherry Hall', 'David Hall'],
    'Mr & Mrs David Nolan': ['Kara Nolan', 'David Nolan'],
    'Mr & Mrs David Williams': ['Lisa Williams', 'David Williams'],
    'Mr & Mrs Derek Davis': ['Casey Davis', 'Derek Davis'],
    'Mr & Mrs Doug Dreyer': ['Lisa Dreyer', 'Doug Dreyer'],
    'Mr & Mrs Edward Newman': ['Bikachu Nooner', 'Edward Newman'],
    'Mr & Mrs Erik Utheim': ['Karolyn Utheim', 'Erik Utheim'],
    'Mr & Mrs Evan Roman': ['Megan Roman', 'Evan Roman'],
    'Mr & Mrs Francis Ounan': ['Carolyn Ounan', 'Francis Ounan'],
    'Mr & Mrs Gerard Cerza': ['Alison Gill', 'Gerard Cerza'],
    'Mr & Mrs Gordon Whitehead': ['Annie Whitehead', 'Gordon Whitehead'],
    'Mr & Mrs Jack Newman': ['Stephanie Newman', 'Jack Newman'],
    'Mr & Mrs Jake Manelis': ['Greta Manelis', 'Jake Manelis'],
    'Mr & Mrs James Newman': ['Karen Fiorito', 'James Newman'],
    'Mr & Mrs James Riggins': ['Piper Riggins', 'James Riggins'],
    'Mr & Mrs Jay Garrish': ['Jill Garrish', 'Jay Garrish'],
    'Mr & Mrs John Greenwood': ['Janine Greenwood', 'John Greenwood'],
    'Mr & Mrs Joseph Dinan': ['Michelle Dinan', 'Joseph Dinan'],
    'Mr & Mrs Kerry Lickfield': ['Melanie Lickfield', 'Kerry Lickfield'],
    'Mr & Mrs Kyle Barmoy': ['Kacey Barmoy', 'Kyle Barmoy'],
    'Mr & Mrs Kyle West': ['Kelley West', 'Kyle West'],
    'Mr & Mrs Mark Sanders': ['Alyson Sanders', 'Mark Sanders'],
    'Mr & Mrs Mark Stevens': ['Donna Stevens', 'Mark Stevens'],
    'Mr & Mrs Matthew Meeker': ['Margaret Meeker', 'Matthew Meeker'],
    'Mr & Mrs Michael Woelkers': ['Ashley Woelkers', 'Michael Woelkers'],
    'Mr & Mrs Rick Bullota': ['Wendy Bullota', 'Rick Bullota'],
    'Mr & Mrs Robert Guenther': ['Maxine Guenther', 'Robert Guenther'],
    'Mr & Mrs Robert Newman': ['Theresa Newman', 'Robert Newman'],
    'Mr & Mrs Roger Mrusek': ['Andrea Mrusek', 'Roger Mrusek'],
    'Mr & Mrs Scott Stephens': ['Martha Stephens', 'Scott Stephens'],
    'Mr & Mrs Scott Velke': ['Amanda Velke', 'Scott Velke'],
    'Mr & Mrs Timothy McLaughlin': ['Kristen McLaughlin', 'Timothy McLaughlin'],
    'Mr & Mrs Tom Riordan': ['Katharine Riordan', 'Tom Riordan'],
    'Mr & Mrs Vincent Milano': ['Christie Milano', 'Vincent Milano'],
    'Mr & Mrs Will Riggins': ['Emily Riggins', 'Will Riggins'],
    'Mr & Mrs William Revere': ['Barb Revere', 'William Revere'],
    'Mr Adam Evans & Ms Riley Oliveira': ['Adam Evans ', 'Riley Oliveira'],
    'Mr Alex Reed & Ms Alaina Yorey': ['Alex Reed ', 'Alaina Yorey'],
    'Mr Anthony Philips & Ms Christina Karika': ['Anthony Philips ',
        'Christina Karika'],
    'Mr Aris Matteis & Ms Lexie Rose': ['Aris Matteis ', 'Lexie Rose'],
    'Mr Christopher Whitehead': ['Christopher Whitehead'],
    'Mr Costas Matteis & Guest': ['Costas Matteis ', 'Anna Muller'],
    'Mr Craig Newman': ['Craig Newman'],
    'Mr Dan Newman': ['Dan Newman'],
    'Mr David Reaph': ['David Reaph'],
    'Mr Geoffrey Reaph & Ms Nancy Morgan': ['Geoffrey Reaph ', 'Nancy Morgan'],
    'Mr Jake Rex & Ms. Dana Elderhorst': ['Jake Rex ', 'Dana Elderhorst'],
    'Mr James Newman': ['James Newman'],
    'Mr James Whelan & Ms Eleni Drautz': ['James Whelan ', 'Eleni Drautz'],
    'Mr Jared Wertz & Ms Elizabeth Sheridan': ['Jared Wertz ',
        'Elizabeth Sheridan'],
    'Mr John Fiorito': ['John Fiorito'],
    'Mr Ken Whitehead & Ms Bernadette Demeis': ['Ken Whitehead ',
        'Bernadette Demeis'],
    'Mr Kyle Greenzweig': ['Kyle Greenzweig'],
    'Mr Matt Bonshak ': ['Matt Bonshak '],
    'Mr Michael Lewis & Ms Marissa Cole': ['Michael Lewis ', 'Marissa Cole'],
    'Mr Michael Richelieu': ['Michael Richelieu'],
    'Mr Norman Revere & Ms Shelby Dinger': ['Norman Revere ', 'Shelby Dinger'],
    'Mr Ryan Schmidt': ['Ryan Schmidt'],
    'Mr Scott Zelle & Ms Sara Karol': ['Scott Zelle ', 'Sara Karol'],
    "Mr Tommy O'Brien": ["Tommy O'Brien"],
    'Mr Will Moss & Ms Campbell Holman': ['Will Moss ', 'Campbell Holman'],
    'Mr Zach Jennings & Ms Carolina Pisciotta': ['Zach Jennings ',
        'Carolina Pisciotta'],
    'Mr and Mrs Fred Riggins': ['Fred Riggins', 'Alyssa Riggins'],
    'Mr and Mrs. Carl Delacato': ['Libbie Delacato', 'Carl Delacato'],
    'Mr. & Mrs. Scott Meeker': ['Alex Meeker', 'Scott Meeker'],
    'Mrs Lori McGowan': ['Mrs Lori McGowan'],
    'Mrs Nancy Maney': ['Nancy Maney'],
    'Mrs Verna Revere & Ms Ella Revere': ['Verna Revere ', 'Ella Revere'],
    'Ms Amanda Dreyer': ['Amanda Dreyer'],
    'Ms Andrea McKinney': ['Andrea McKinney'],
    'Ms Catherine Riggins': ['Catherine Riggins'],
    'Ms Devin Newman & Wyatt Kronberg': ['Devin Newman ', ' Wyatt Kronberg'],
    'Ms Evann Specht & Mr Hayden Mahoney': ['Evann Specht ', 'Hayden Mahoney'],
    'Ms Fallon Goode': ['Fallon Goode'],
    'Ms Fern Matteis': ['Fern Matteis'],
    'Ms Grace Newman': ['Grace Newman'],
    'Ms Jacqueline Ivey': ['Jacqueline Ivey'],
    'Ms Jessica Commisso & Mr Patrick Kelly': ['Jessica Commisso ',
        'Patrick Kelly'],
    'Ms Laura McGovern': ['Laura McGovern'],
    'Ms Madeline Hughes & Ms Sarah Moore': ['Madeline Hughes ', 'Sarah Moore'],
    'Ms Mary Newman & Mr Diego Mora': ['Mary Newman ', 'Diego Mora'],
    'Ms Megan Ebeck': ['Megan Ebeck'],
    'Ms Mikaela McGowan & Mr Kamali Johnson': ['Mikaela McGowan ',
        'Kamali Johnson'],
    'Ms Natalie Newman': ['Natalie Newman'],
    'Ms Nicole Newman': ['Nicole Newman'],
    'Ms Sara Snadecki & Mr William Gerke': ['Sara Snadecki ', 'William Gerke'],
    'Ms Taylor Weinstein': ['Taylor Weinstein'],
    'Name on Envelope': ['Name on Envelope'],
    'Perrottelli Family & Grandma Newman & Kevin': ['Maura Perrottelli',
        'JP Perrottelli',
        'Samantha Perrottelli',
        'Grandma Newman ',
        ' Kevin Garrish'],
    'Tara Ounan': ['Tara Ounan'],
    'The Future Mr & Mrs DiRusso': ['Christian DiRusso', 'Alex Stavropoulos'],
    'The Future Mr & Mrs Evan Ronen': ['Jess Behr', 'Evan Ronen'],
    'The Future Mr & Mrs Nicolas Womach': ['Lauren Revere', 'Nicolas Womach'],
    'The Future Mr & Mrs Russo': ['Jess Italiano', 'Sean Russo'],
    'The Future Mr & Mrs Ryan Glass': ['Kyle Carey', 'Ryan Glass'],
    'The Revere Family': ['Richard Revere',
        'Robin Revere',
        'Kellie Revere',
        'Sophie Revere']
}

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
} t