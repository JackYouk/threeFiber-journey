

function FirstMesh() {
    return (
        <>
            <group>
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color='red' />
                </mesh>
                <mesh>
                    <sphereGeometry />
                    <meshBasicMaterial color='orange' />
                </mesh>
            </group>
        </>
    )
}