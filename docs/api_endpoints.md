<h3>HTML Endpoints</h3>

Root
<ul>
<li>GET / - loads React/Redux app</li>
</ul>

<h3>JSON Endpoints</h3>

Users
<ul>
<li>GET /api/users</li>
<li>PATCH /api/users</li>
</ul>

Session
<ul>
<li>POST /api/session</li>
<li>DELETE /api/session</li>
</ul>

Subjects
<ul>
<li>GET /api/subjects (get subjects by current_user's id)</li>
<li>GET /api/subjects/:id (returns subject)</li>
<li>POST /api/subjects (create subject) </li>
<li>PATCH /api/subjects/:id (takes subject, returns subject)</li>
<li>DELETE /api/subjects/:id (takes nothing, returns nothing)</li>
</ul>

Decks
<ul>
<li>GET /api/decks/:id (returns deck)</li>
<li>GET /api/decks/ (takes subject id, returns decks matching id)</li>
<li>Post /api/decks (creates subject) </li>
<li>PATCH /api/decks/:id (takes deck, returns updated deck)</li>
<li>DELETE /api/decks/:id (takes nothing, returns nothing)</li>
</ul>

Cards
<ul>
<li>GET /api/cards/:id (returns the card)</li>
<li>POST /api/cards (add new card) </li>
<li>PATCH /api/cards/:id (takes card, returned edited card)</li>
<li>DELETE /api/cards/:id (takes nothing, return nothing)</li>
</ul>
