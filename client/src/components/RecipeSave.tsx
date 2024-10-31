function RecipeSave() {
    return (
        <>
            <div className="container my-4">
                <h3 className="text-center mb-4 text-white">Saved Recipes:</h3>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Red Pasta Parm</h5>
                                <p className="card-ingredients">1 c Frozen green peas, defrosted|4 tb Chopped fresh mint|1 1/2 c All purpose flour|2 pn Pepper</p>
                                <p className="card-servings">2 Servings</p>
                                <p className="card-instructions">Place peas & mint in a food processor & puree. Add remaining ingredients & pulse until a ball of dough forms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeSave;